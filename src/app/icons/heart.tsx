export const Heart = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="heart-icon"
    >
      <style>
        {`
          @keyframes heartbeat {
            0%, 100% {
              transform: scale(1);
            }
            25% {
              transform: scale(1.1);
            }
            50% {
              transform: scale(1);
            }
            75% {
              transform: scale(1.05);
            }
          }
          
          .heart-icon {
            animation: heartbeat 2s ease-in-out infinite;
            transform-origin: center;
          }
        `}
      </style>
      <path
        d="M50 85C50 85 15 65 15 40C15 30 20 20 30 20C37 20 43 25 50 35C57 25 63 20 70 20C80 20 85 30 85 40C85 65 50 85 50 85Z"
        stroke="var(--text-clr-1)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
