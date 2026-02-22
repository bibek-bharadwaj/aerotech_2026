export default function AeroLogo({ className = '', size = 'md' }) {
    const heights = {
        sm: 'h-5',
        md: 'h-18',
        lg: 'h-24',
        xl: 'h-32',
    };

    return (
        <img
            src={`${import.meta.env.BASE_URL}aerotech_logo.png`}
            alt="Aerotech"
            className={`${heights[size]} w-auto object-contain ${className}`}
        />
    );
}
