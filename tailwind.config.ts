import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		keyframes: {
			scroll: {
				'0%': { transform: 'translateX(0)' },
				'100%': { transform: 'translateX(-50%)' },
			  },
			  fadeIn: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' },
			  },
			  fadeOut: {
				'0%': { opacity: '1' },
				'100%': { opacity: '0' },
			  },
			gradient: {
			  '0%': { 'background-position': '0% 50%' },
			  '50%': { 'background-position': '100% 50%' },
			  '100%': { 'background-position': '0% 50%' },
			},
			'gradient-rotate': {
				'0%': {
					'background-position': '0% 50%',
				},
				'50%': {
					'background-position': '100% 50%',
				},
				'100%': {
					'background-position': '0% 50%',
				},
			},
		  },
		  animation: {
			'gradient-bg': 'gradient 20s ease-in-out infinite',
			'gradient-rotate': 'gradient-rotate 8s ease infinite',
			  'scroll': 'scroll linear infinite',
			  fadeIn: 'fadeIn 0.5s ease-in-out forwards',
			  fadeOut: 'fadeOut 0.5s ease-in-out forwards',
		  },
		  backgroundSize: {
			'200%': '200% 200%',
		  },
  		colors: {
			black: {
				DEFAULT: "#000",
				100: "#000319",
				200: "rgba(17, 25, 40, 0.75)",
				300: "rgba(255, 255, 255, 0.125)",
			  },
			  white: "#ffffff",
			  purple: "#6C63FF",
			  gray: {
				300: "#D1D5DB",
				400: "#9CA3AF",
				800: "#1F2937",
			  },
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
