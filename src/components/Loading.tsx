const Loading = (props: any) => {
  return (
    <div className="loading flex items-center justify-center w-full h-screen bg-transparent">
      <div>
        <svg width={38} height={38} xmlns="http://www.w3.org/2000/svg" stroke="#fff" {...props}>
          <g transform="translate(1 1)" strokeWidth={2} fill="none" fillRule="evenodd">
            <circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
