import { LucideIcon, Home, User, Settings, Search, Bell, MessageSquare, LogOut, ChevronRight, ChevronLeft, Github } from "lucide-react";
import { SVGProps } from "react";

export type IconType = LucideIcon;

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icons = {
  Home: (props: IconProps) => <Home {...props} />,
  User: (props: IconProps) => <User {...props} />,
  Settings: (props: IconProps) => <Settings {...props} />,
  Search: (props: IconProps) => <Search {...props} />,
  Bell: (props: IconProps) => <Bell {...props} />,
  MessageSquare: (props: IconProps) => <MessageSquare {...props} />,
  LogOut: (props: IconProps) => <LogOut {...props} />,
  ChevronRight: (props: IconProps) => <ChevronRight {...props} />,
  ChevronLeft: (props: IconProps) => <ChevronLeft {...props} />,
  Github: (props: IconProps) => <Github {...props} />,
  Google: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={props.size || 24} height={props.size || 24} {...props}>
      <path fill="#4285F4" d="M24 9.5c3.1 0 5.4 1.3 6.6 2.5L36.4 9C33.8 6.7 29.8 5 24 5 14.9 5 7.5 10.9 4.6 19h7.1C13 13.5 18 9.5 24 9.5z" />
      <path fill="#34A853" d="M44 20H24v8.5h11.6C33.7 33.8 29.4 36 24 36c-6.3 0-11.6-4-13.4-9.5H4.6C7.5 36.1 14.9 42 24 42c7.2 0 13.2-2.4 17.3-6.5C44.9 32 46 28.7 46 24.5c0-1-.1-2.1-.3-3.1L44 20z" />
      <path fill="#FBBC05" d="M10.6 28.2C10.2 27 10 25.8 10 24.5s.2-2.5.6-3.7H4.6C3.5 22 3 23.6 3 25.5c0 2.1.5 4.1 1.6 5.7l6-3z" />
      <path fill="#EA4335" d="M24 13c3.4 0 6.4 1.2 8.7 3.1l6.5-6.5C35.3 6 29.8 4 24 4 14.9 4 7.5 9.9 4.6 18h7.1C13 13.5 18 9.5 24 9.5c3.1 0 5.4 1.3 6.6 2.5L24 13z" />
    </svg>
  ),
  CustomLogo: (props: IconProps) => (
    <svg viewBox="290 17 24 23" xmlns="http://www.w3.org/2000/svg" width={props.size || 30} height={props.size || 30} {...props}>
      <path
        d="M 303.143 25.325 C 303.842 24.222 304.382 23.027 304.747 21.773 C 306.221 24.934 309.426 27.133 313.137 27.133 L 313.137 30.352 L 313.108 30.352 C 308.01 30.352 303.858 34.508 303.858 39.617 L 300.644 39.617 C 300.634 34.948 303.201 30.874 306.999 28.733 C 305.491 27.877 304.177 26.716 303.143 25.325 Z"
        fill="var(--primary)"
      />
      <path
        d="M 298.742 34.901 C 297.316 31.876 294.31 29.745 290.792 29.585 C 290.652 29.59 290.512 29.59 290.366 29.59 L 290.366 26.351 C 290.506 26.351 290.652 26.356 290.792 26.356 C 293.098 26.258 295.282 25.295 296.91 23.659 C 298.651 21.923 299.626 19.563 299.617 17.105 L 302.836 17.105 C 302.836 20.44 301.54 23.572 299.182 25.93 C 298.387 26.729 297.488 27.417 296.509 27.975 C 298.009 28.829 299.317 29.984 300.351 31.367 C 299.652 32.464 299.111 33.653 298.743 34.901 L 298.742 34.901 Z"
        fill="var(--primary--darker)"
      />
    </svg>
  ),
};

// Example usage in a component
// import { Icons } from './icons';

// const ExampleComponent = () => (
//   <div>
//     <Icons.Home size={24} />
//     <Icons.User size={24} />
//     <Icons.Settings size={24} />
//     <Icons.Github size={24} />
//     <Icons.Google size={24} />
//     <Icons.CustomLogo size={30} />
//   </div>
// );

export default Icons;
