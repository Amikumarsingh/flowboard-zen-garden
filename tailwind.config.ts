
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
                zen: {
                    purple: '#9b87f5',
                    'light-purple': '#D6BCFA',
                    green: '#F2FCE2',
                    blue: '#D3E4FD',
                    gray: '#F1F0FB',
                    'sky-blue': '#33C3F0',
                    'dark-purple': '#6b5bb5',
                    'dark-blue': '#2a466d',
                    'dark-gray': '#2D2D35'
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' }
                },
                'card-slide': {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                },
                'blob-move': {
                    '0%, 100%': {
                        borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
                    },
                    '50%': {
                        borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%'
                    }
                },
                'cursor-blink': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
                'card-slide': 'card-slide 0.6s ease-out',
                'blob-move': 'blob-move 8s ease-in-out infinite',
                'cursor-blink': 'cursor-blink 1.5s ease-in-out infinite'
			},
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #D3E4FD 0%, #D6BCFA 100%)',
                'hero-gradient-dark': 'linear-gradient(135deg, #2a466d 0%, #6b5bb5 100%)',
                'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)',
                'card-gradient-dark': 'linear-gradient(135deg, rgba(45, 45, 53, 0.9) 0%, rgba(35, 35, 42, 0.6) 100%)',
                'cta-gradient': 'linear-gradient(135deg, #9b87f5 0%, #33C3F0 100%)',
                'cta-gradient-dark': 'linear-gradient(135deg, #6b5bb5 0%, #207a9e 100%)'
            },
            boxShadow: {
                'neumorphic': '10px 10px 20px rgba(0, 0, 0, 0.05), -10px -10px 20px rgba(255, 255, 255, 0.8)',
                'neumorphic-dark': '10px 10px 20px rgba(0, 0, 0, 0.3), -10px -10px 20px rgba(75, 75, 85, 0.2)',
                'neumorphic-sm': '5px 5px 10px rgba(0, 0, 0, 0.05), -5px -5px 10px rgba(255, 255, 255, 0.8)',
                'neumorphic-sm-dark': '5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(75, 75, 85, 0.2)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
