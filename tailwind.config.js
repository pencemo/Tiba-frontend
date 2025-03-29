/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
		animation: {
			rotate: 'rotate 1s linear infinite',
			prixClipFix: 'prixClipFix 2s linear infinite',
			"caret-blink": "caret-blink 1.25s ease-out infinite",
		  },
		  keyframes: {
			"caret-blink": {
				"0%,70%,100%": { opacity: "1" },
				"20%,50%": { opacity: "0" },
			  },
			rotate: {
			  '100%': { transform: 'rotate(360deg)' },
			},
			prixClipFix: {
			  '0%': { 'clip-path': 'polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)' },
			  '25%': { 'clip-path': 'polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)' },
			  '50%': { 'clip-path': 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)' },
			  '75%': { 'clip-path': 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)' },
			  '100%': { 'clip-path': 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)' },
			},
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
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
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
			  navy: {
				600: "#2B3147",
			  },
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}