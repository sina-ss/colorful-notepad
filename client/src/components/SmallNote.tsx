interface SmallNoteProps {
  color: string
}
const SmallNote: React.FC<SmallNoteProps> = ({color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="57"
      viewBox="0 0 52 57"
      fill="none"
    >
      <g filter="url(#filter0_d_44_18539)">
        <path
          d="M8.36377 0H31.9998C37.6003 0 40.4006 0 42.5397 1.08993C44.4213 2.04867 45.9511 3.57847 46.9098 5.46009C47.9998 7.59921 47.9998 10.3995 47.9998 16V33C47.9998 38.6005 47.9998 41.4008 46.9098 43.5399C45.9511 45.4215 44.4213 46.9513 42.5397 47.9101C40.4006 49 37.6003 49 31.9998 49H8.36377V0Z"
          fill={color}
        />
        <path
          d="M13.1633 19.1195C14.4216 19.1195 15.4091 18.065 15.4091 16.8052C15.4091 15.5453 14.4216 14.4908 13.1633 14.4908C11.905 14.4908 10.9175 15.5453 10.9175 16.8052C10.9175 18.065 11.905 19.1195 13.1633 19.1195Z"
          fill="white"
          stroke="black"
        />
        <path
          d="M5 16.8463L12.9902 16.8463"
          stroke="black"
          strokeLinecap="round"
        />
        <path
          d="M13.1633 28.1142C14.4216 28.1142 15.4091 27.0597 15.4091 25.7999C15.4091 24.54 14.4216 23.4855 13.1633 23.4855C11.905 23.4855 10.9175 24.54 10.9175 25.7999C10.9175 27.0597 11.905 28.1142 13.1633 28.1142Z"
          fill="white"
          stroke="black"
        />
        <path
          d="M5 26.0263L12.9902 26.0263"
          stroke="black"
          strokeLinecap="round"
        />
        <path
          d="M13.1633 37.1087C14.4216 37.1087 15.4091 36.0542 15.4091 34.7944C15.4091 33.5345 14.4216 32.48 13.1633 32.48C11.905 32.48 10.9175 33.5345 10.9175 34.7944C10.9175 36.0542 11.905 37.1087 13.1633 37.1087Z"
          fill="white"
          stroke="black"
        />
        <path
          d="M5 34.8568L12.9902 34.8567"
          stroke="black"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_44_18539"
          x="0.5"
          y="0"
          width="51.5"
          height="57"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_44_18539"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_44_18539"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SmallNote;
