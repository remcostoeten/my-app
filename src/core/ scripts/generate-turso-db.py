import subprocess
import re
import pyperclip
import argparse
import os
import sys

def run_command(command):
    """Run a shell command and return its output and error (if any)."""
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    return result.stdout.strip(), result.stderr.strip(), result.returncode

def update_env_file(file_path, new_vars):
    if not os.path.exists(file_path):
        print(f"File {file_path} does not exist. Creating new file.")
        with open(file_path, 'w') as f:
            f.write('\n'.join(f"{k}={v}" for k, v in new_vars.items()))
        return

    with open(file_path, 'r') as f:
        lines = f.readlines()

    updated_lines = []
    updated = {key: False for key in new_vars.keys()}

    for line in lines:
        line = line.strip()
        if line.startswith('#') or not line:
            updated_lines.append(line)
            continue

        key = line.split('=')[0]
        if key in new_vars:
            if not updated[key]:
                updated_lines.append(f'# Old {line}')
                updated_lines.append(f'{key}={new_vars[key]}')
                updated[key] = True
        else:
            updated_lines.append(line)

    for key, value in new_vars.items():
        if not updated[key]:
            updated_lines.append(f'{key}={value}')

    with open(file_path, 'w') as f:
        f.write('\n'.join(updated_lines) + '\n')

def find_project_root():
    """Find the project root by looking for .git directory or pyproject.toml file."""
    current_dir = os.getcwd()
    while True:
        if os.path.exists(os.path.join(current_dir, '.git')) or \
           os.path.exists(os.path.join(current_dir, 'pyproject.toml')):
            return current_dir
        parent = os.path.dirname(current_dir)
        if parent == current_dir:
            return None
        current_dir = parent

def check_turso_auth():
    """Check if the user is authenticated with Turso CLI."""
    print("Checking Turso CLI authentication...")
    output, error, code = run_command("turso auth status")
    if code != 0 or "You are not logged in" in output:
        print("Error: You are not authenticated with Turso CLI.")
        print("Please run 'turso auth login' to authenticate.")
        sys.exit(1)
    print("Turso CLI authentication successful.")

# Set up argument parser
parser = argparse.ArgumentParser(description='Generate Turso DB credentials and update .env file.')
parser.add_argument('--overwrite', metavar='PATH', help='Path to .env or .env.local file to overwrite')

args = parser.parse_args()

# Find the project root directory
project_root = find_project_root()
if not project_root:
    print("Error: Could not find project root. Make sure you're in a git repository or a directory with pyproject.toml.")
    sys.exit(1)

# Check Turso CLI authentication
check_turso_auth()

# Create a new database
print("Creating new database...")
create_output, create_error, create_code = run_command("turso db create")
print(f"Output: {create_output}")
if create_error:
    print(f"Error: {create_error}")
    print(f"Return code: {create_code}")
    sys.exit(1)

# Extract database name from create output
db_name_match = re.search(r'Created database (\S+)', create_output)
if db_name_match:
    db_name = db_name_match.group(1)
else:
    print("Error: Could not extract database name from output.")
    sys.exit(1)

# Show database details
print(f"\nRetrieving details for database: {db_name}")
show_output, show_error, show_code = run_command(f"turso db show {db_name}")
print(f"Output: {show_output}")
if show_error:
    print(f"Error: {show_error}")
    print(f"Return code: {show_code}")
    sys.exit(1)

# Extract URL from show output
url_match = re.search(r'URL:\s+(libsql://[\w.-]+)', show_output)
db_url = url_match.group(1) if url_match else "URL not found"

# Create a new token
print(f"\nCreating token for database: {db_name}")
token_output, token_error, token_code = run_command(f"turso db tokens create {db_name}")
print("Token created successfully")
if token_error:
    print(f"Error: {token_error}")
    print(f"Return code: {token_code}")
    sys.exit(1)

# Get token from token output
auth_token = token_output.strip()

# Generate environment variables
new_vars = {"DB_URL": db_url, "AUTH_TOKEN": auth_token}
env_vars = f"DB_URL={db_url}\nAUTH_TOKEN={auth_token}"

# Print the environment variables to console
print("\nGenerated Environment Variables:")
print(env_vars)

if args.overwrite:
    update_env_file(os.path.join(project_root, args.overwrite), new_vars)
    print(f"\nEnvironment variables have been updated in {args.overwrite}")
else:
    print("\nNo overwrite path provided. Environment variables will not be saved to a file.")

# Copy to clipboard
pyperclip.copy(env_vars)
print("Environment variables have been copied to clipboard. ")
print("Much love xxx remcostoeten")
