import { css, useTheme } from '@emotion/react';

export interface IconUserDefaultProps {}

export function IconUserDefault(props: IconUserDefaultProps) {
  const {} = props;
  const { color } = useTheme();

  const pathStyle = css`
    color: ${color};
    fill: currentColor;
  `;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        css={pathStyle}
        d="M12 2C6.48 2 2 6.48 2 12c0 1.82.5 3.53 1.35 5 .21.36.44.71.7 1.04.01.02.02.03.03.05.51.66 1.1 1.26 1.76 1.78.03.03.07.05.1.07.29.22.59.42.9.61.06.04.12.07.18.11.69.4 1.43.72 2.21.94.1.03.2.05.3.08.3.08.6.14.9.19A9.901 9.901 0 0012 22c.42 0 .83-.03 1.23-.08.12-.01.23-.03.34-.05.31-.05.61-.11.9-.19.1-.03.2-.05.3-.08.78-.23 1.52-.54 2.21-.94.06-.03.12-.07.18-.11.31-.19.61-.39.9-.61.03-.03.07-.05.1-.07.66-.52 1.25-1.11 1.76-1.78.01-.01.02-.03.03-.05.25-.33.49-.68.7-1.04A9.973 9.973 0 0022 12c0-5.52-4.48-10-10-10zm6.81 15.86c-.02.02-.04.04-.05.06-.22.25-.45.48-.69.7l-.09.09c-.8.71-1.71 1.28-2.71 1.67l-.09.03c-.29.11-.58.2-.88.28-.07.02-.14.04-.21.05-.27.07-.54.11-.82.16-.08.01-.16.03-.24.04-.33.04-.68.06-1.03.06a7.173 7.173 0 01-1.28-.11c-.28-.04-.55-.09-.82-.16-.07-.02-.14-.04-.21-.05-.3-.08-.59-.17-.88-.28l-.09-.03c-.99-.39-1.91-.95-2.71-1.67-.03-.03-.06-.06-.1-.09-.24-.22-.47-.45-.68-.7-.02-.02-.04-.04-.05-.06-.23-.26-.45-.55-.65-.85C6.19 14.52 9 13 12 13s5.81 1.52 7.47 4c-.2.3-.42.59-.66.86zM12 11.06c-1.65 0-2.98-1.34-2.98-2.98S10.36 5.1 12 5.1c1.65 0 2.98 1.34 2.98 2.98s-1.34 2.98-2.98 2.98zm8.02 5a9.996 9.996 0 00-7.69-4.04c2.04-.17 3.65-1.86 3.65-3.94 0-2.19-1.78-3.97-3.98-3.97S8.02 5.89 8.02 8.08c0 2.08 1.61 3.77 3.65 3.94-3.15.1-5.93 1.67-7.69 4.04C3.36 14.84 3 13.46 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9c0 1.46-.36 2.84-.98 4.06z"
      />
    </svg>
  );
}
