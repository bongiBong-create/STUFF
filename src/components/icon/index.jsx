export const Icons = ({ icon }) => {
  if (icon === "logo") {
    return (
      <svg
        width="78"
        height="32"
        viewBox="0 0 78 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4_33)">
          <path
            d="M34.4417 9.96119H29.8718V24.003H26.546V9.96119H22V7H34.4417V9.96119ZM49.546 7V18.1761C49.546 20.0229 48.9161 21.4796 47.656 22.5463C46.4118 23.6129 44.8726 24.1463 43.0382 24.1463C41.2038 24.1463 39.6566 23.6129 38.3965 22.5463C37.1523 21.4796 36.5302 20.0229 36.5302 18.1761V7H39.856V18.0567C39.856 19.1075 40.1431 19.8955 40.7174 20.4209C41.3075 20.9304 42.0812 21.1851 43.0382 21.1851C43.9953 21.1851 44.7689 20.9304 45.3591 20.4209C45.9493 19.8955 46.2444 19.1075 46.2444 18.0567V7H49.546ZM64.2363 9.96119H58.2308C57.5288 9.96119 57.0344 10.0965 56.7473 10.3672C56.476 10.6378 56.3406 11.1075 56.3406 11.7761V14.1403H62.5854L62.3461 17.1015H56.3406V24.003H53.0148V10.4627C53.0148 9.20499 53.2861 8.31343 53.8283 7.78806C54.3867 7.26269 55.3357 7 56.6755 7H64.2363V9.96119ZM78.349 9.96119H72.3435C71.6415 9.96119 71.1472 10.0965 70.8601 10.3672C70.5887 10.6378 70.4533 11.1075 70.4533 11.7761V14.1403H76.6981L76.4588 17.1015H70.4533V24.003H67.1275V10.4627C67.1275 9.20499 67.3989 8.31343 67.941 7.78806C68.4995 7.26269 69.4484 7 70.7883 7H78.349V9.96119Z"
            fill="white"
          />
          <path
            d="M22.0123 4.77612H0V26.7463H22.0123V4.77612Z"
            fill="url(#pattern0_4_33)"
          />
        </g>
        <defs>
          <pattern
            id="pattern0_4_33"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_4_33" transform="scale(0.00390625)" />
          </pattern>
          <clipPath id="clip0_4_33">
            <rect width="78" height="32" fill="white" />
          </clipPath>
          <image
            id="image0_4_33"
            width="256"
            height="256"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
  }

  if (icon === "avatar") {
    return (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.7442 11.5431C21.1373 10.9525 22.0762 9.73969 21.9951 8.16478C21.9726 7.72745 21.8757 7.29473 21.7144 6.88882C21.5655 6.51407 21.3255 6.2004 21.1547 5.84015C20.8033 5.09889 20.642 4.27644 20.3506 3.51123C19.097 0.219406 14.9864 -0.778997 12.0159 0.605558C10.6829 1.22686 9.65382 2.33875 8.99602 3.65831C10.0152 3.30194 11.1691 3.50945 12.007 4.19749C11.9741 4.2433 11.942 4.2894 11.9114 4.3361C10.5129 3.29304 8.47167 3.77883 7.66109 5.33161C6.87756 6.83257 7.56272 8.75502 9.10595 9.40542C10.0409 9.79944 11.1363 9.65791 11.9437 9.0381C11.9785 9.08098 12.0146 9.12294 12.0515 9.16392C11.1114 9.96465 9.75737 10.1395 8.65156 9.59691C9.05221 10.2483 9.61378 10.7838 10.2541 11.1875C9.78001 12.0602 9.45835 13.0433 9.43558 14.0461C9.41489 14.9576 9.46336 15.9421 9.78802 16.8019C8.96393 16.7816 8.01951 16.6235 7.44037 15.9672C6.89334 15.3472 6.78833 14.4403 6.78957 13.6416C6.79109 12.6568 7.00546 11.7138 7.13547 10.7445C7.26492 9.77941 7.18129 8.76908 6.77536 7.87796C5.95864 6.08505 3.75865 5.03144 1.92657 5.87499C0.135595 6.69961 -0.730752 9.16665 0.762156 10.7066C1.3699 11.3335 2.29497 11.6654 3.14216 11.4078C3.93597 11.1664 4.56928 10.4385 4.64995 9.59051C4.73048 8.74403 4.15839 7.85679 3.31647 7.68277C2.88968 7.59456 2.47833 7.92054 2.50771 8.3764C2.52052 8.57514 2.6244 8.76259 2.78542 8.8768C2.96415 9.00357 3.1914 8.99564 3.29969 9.21743C3.5066 9.64116 3.04089 10.0936 2.65937 10.1548C2.19975 10.2286 1.72978 9.89726 1.49859 9.51444C0.962069 8.62605 1.58532 7.51953 2.42374 7.11016C3.22895 6.71701 4.19643 6.94971 4.86996 7.50684C5.45313 7.98924 5.77205 8.71103 5.85628 9.46018C5.96171 10.3979 5.68082 11.3232 5.56926 12.2478C5.45785 13.1711 5.41425 14.1262 5.60353 15.0424C5.77848 15.8892 6.17727 16.678 6.84817 17.2268C7.51824 17.7749 8.36572 18.0221 9.21044 18.1044C9.74006 18.156 10.2743 18.1459 10.804 18.1017C11.0502 18.2562 11.3383 18.3751 11.6737 18.4567C11.7937 18.8519 12.1543 19.1275 12.5683 19.1275H20.9678C22.0058 19.1275 22.0125 17.8497 21.8832 17.1003C21.7491 16.3222 21.355 15.6025 20.7009 15.1578C20.696 13.7726 20.3062 12.6419 19.7442 11.5431ZM11.3702 7.83812C11.1243 8.09853 10.7794 8.26159 10.3971 8.26159C9.65276 8.26159 9.04721 7.64614 9.04721 6.8896C9.04721 6.13305 9.65276 5.5176 10.3971 5.5176C10.7655 5.5176 11.0995 5.66866 11.3433 5.91262C11.3006 6.2166 11.2795 6.55365 11.2795 6.93556C11.2795 7.2728 11.3111 7.57096 11.3702 7.83812ZM14.4726 7.93182C14.6063 7.23509 15.084 6.62831 15.3823 5.99556C15.6436 5.4413 15.8104 4.8322 16.1585 4.32471C16.7888 3.40557 17.8609 2.85509 18.9635 2.90485C19.5147 3.67288 19.7096 4.60299 20.0118 5.48612C20.1447 5.87423 20.2889 6.25896 20.5067 6.6068C20.7639 7.01746 20.9586 7.44708 21.0306 7.93257L20.8017 7.85798C20.4608 7.71828 20.2429 8.25084 20.4674 8.479L20.9082 8.92702C20.9327 8.95194 20.9603 8.9714 20.9889 8.98834C20.6015 10.5303 18.7975 10.9809 17.4436 11.1182C15.87 11.0148 14.1315 9.70972 14.4726 7.93182ZM18.9793 18.0326H12.6918H12.6909H12.6892C12.6677 17.8128 12.6411 17.6113 12.7776 17.4277C12.9283 17.2248 13.1799 17.0926 13.4 16.9856C14.0721 16.6589 14.8256 16.4845 15.5569 16.3619C16.3084 16.2358 17.1762 16.104 17.9163 16.3481C18.6215 16.5806 19.0928 17.2647 18.9793 18.0326ZM19.2671 17.7357C19.1982 16.7025 18.4421 16.0695 17.4627 15.9607C18.0952 15.9133 18.7898 15.9132 19.3105 16.3378C19.7855 16.725 19.9986 17.4293 19.9138 18.0326H19.2622C19.2738 17.9337 19.2738 17.8349 19.2671 17.7357ZM20.0897 17.0209C19.8871 16.3787 19.3882 15.9243 18.7519 15.7501C19.3726 15.7329 20.0098 15.8576 20.4246 16.3677C20.7815 16.8066 20.9246 17.4726 20.8493 18.0326H20.1966C20.2356 17.6981 20.1907 17.3407 20.0897 17.0209ZM19.96 15.0415C19.96 15.2425 19.9436 15.4463 19.9061 15.6439C19.5454 15.4943 19.156 15.4519 18.7693 15.465C18.4627 14.3678 18.623 13.1432 19.2352 12.1832C19.6426 13.0669 19.96 14.0562 19.96 15.0415ZM17.9079 6.84753C17.8896 6.24313 18.2172 5.74245 18.6397 5.72921C19.0621 5.71598 19.4195 6.19521 19.4378 6.79961C19.4561 7.40401 19.1285 7.9047 18.706 7.91794C18.2836 7.93117 17.9262 7.45193 17.9079 6.84753Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.3645 23.4376H9.11454C3.45829 23.4376 1.04163 21.0209 1.04163 15.3647V9.11467C1.04163 3.45842 3.45829 1.04175 9.11454 1.04175H15.3645C21.0208 1.04175 23.4375 3.45842 23.4375 9.11467V15.3647C23.4375 21.0209 21.0208 23.4376 15.3645 23.4376ZM9.11454 2.60425C4.31246 2.60425 2.60413 4.31258 2.60413 9.11467V15.3647C2.60413 20.1667 4.31246 21.8751 9.11454 21.8751H15.3645C20.1666 21.8751 21.875 20.1667 21.875 15.3647V9.11467C21.875 4.31258 20.1666 2.60425 15.3645 2.60425H9.11454Z"
          fill="#576067"
        />
        <path
          d="M12.5 16.9271C11.3267 16.9243 10.2022 16.457 9.37258 15.6274C8.54293 14.7977 8.07563 13.6733 8.07288 12.5C8.07563 11.3267 8.54293 10.2023 9.37258 9.37262C10.2022 8.54298 11.3267 8.07567 12.5 8.07292C13.6732 8.07567 14.7977 8.54298 15.6273 9.37262C16.457 10.2023 16.9243 11.3267 16.927 12.5C16.9243 13.6733 16.457 14.7977 15.6273 15.6274C14.7977 16.457 13.6732 16.9243 12.5 16.9271ZM12.5 9.63542C10.9166 9.63542 9.63538 10.9167 9.63538 12.5C9.63538 14.0833 10.9166 15.3646 12.5 15.3646C14.0833 15.3646 15.3645 14.0833 15.3645 12.5C15.3645 10.9167 14.0833 9.63542 12.5 9.63542ZM17.7083 7.8125C17.5729 7.8125 17.4375 7.78125 17.3125 7.72917C17.1875 7.67709 17.0729 7.60417 16.9687 7.51042C16.875 7.40625 16.7916 7.29167 16.7395 7.16667C16.6894 7.04083 16.6646 6.9063 16.6666 6.77084C16.6666 6.63542 16.6875 6.5 16.7395 6.375C16.802 6.23959 16.875 6.13542 16.9687 6.03125C17.0208 5.98959 17.0729 5.9375 17.125 5.90625C17.1875 5.86459 17.25 5.83334 17.3125 5.8125C17.5023 5.73356 17.7112 5.7122 17.9131 5.7511C18.115 5.79 18.3009 5.88743 18.4479 6.03125C18.5416 6.13542 18.6145 6.23959 18.6666 6.375C18.7187 6.5 18.75 6.63542 18.75 6.77084C18.75 6.90625 18.7187 7.04167 18.6666 7.16667C18.6145 7.29167 18.5416 7.40625 18.4479 7.51042C18.3437 7.60417 18.2291 7.67709 18.1041 7.72917C17.9791 7.78125 17.8437 7.8125 17.7083 7.8125Z"
          fill="#576067"
        />
      </svg>
    );
  }

  if (icon === "facebook") {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.3646 23.6979H10.6771V16.1458H9.6875C9.08333 16.1458 8.59375 15.6562 8.59375 15.0521V13.0729C8.59375 12.4688 9.08333 11.9792 9.6875 11.9792H10.6771V9.375C10.6771 7.21875 12.4271 5.46875 14.5833 5.46875H17.3958C18 5.46875 18.4896 5.95833 18.4896 6.5625V9.0625C18.4896 9.66667 18 10.1562 17.3958 10.1562H15.3646V11.9792H17.3229C17.4844 11.9783 17.6441 12.0135 17.7904 12.082C17.9366 12.1506 18.0658 12.2508 18.1685 12.3755C18.2712 12.5001 18.3449 12.6461 18.3842 12.8027C18.4236 12.9594 18.4275 13.1229 18.3958 13.2812L18 15.2604C17.8958 15.7708 17.4479 16.1354 16.9271 16.1354H15.3646V23.6979ZM12.2396 22.1354H13.8021V14.5833H16.5521L16.7604 13.5417H13.8125V9.6875C13.8125 9.08333 14.3021 8.59375 14.9062 8.59375H16.9375V7.03125H14.5833C13.2917 7.03125 12.2396 8.08333 12.2396 9.375V13.5417H10.1562V14.5833H12.2396V22.1354Z"
          fill="#576067"
        />
        <path
          d="M15.625 23.6978H9.37504C3.71879 23.6978 1.30212 21.2812 1.30212 15.6249V9.37492C1.30212 3.71867 3.71879 1.302 9.37504 1.302H15.625C21.2813 1.302 23.698 3.71867 23.698 9.37492V15.6249C23.698 21.2812 21.2813 23.6978 15.625 23.6978ZM9.37504 2.8645C4.57296 2.8645 2.86462 4.57284 2.86462 9.37492V15.6249C2.86462 20.427 4.57296 22.1353 9.37504 22.1353H15.625C20.4271 22.1353 22.1355 20.427 22.1355 15.6249V9.37492C22.1355 4.57284 20.4271 2.8645 15.625 2.8645H9.37504Z"
          fill="#576067"
        />
      </svg>
    );
  }

  if (icon === "youtube") {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.7084 21.6147H7.29171C3.70837 21.6147 1.30212 19.2084 1.30212 15.6251V9.37508C1.30212 5.79175 3.70837 3.3855 7.29171 3.3855H17.7084C21.2917 3.3855 23.698 5.79175 23.698 9.37508V15.6251C23.698 19.2084 21.2917 21.6147 17.7084 21.6147ZM7.29171 4.948C4.60421 4.948 2.86462 6.68758 2.86462 9.37508V15.6251C2.86462 18.3126 4.60421 20.0522 7.29171 20.0522H17.7084C20.3959 20.0522 22.1355 18.3126 22.1355 15.6251V9.37508C22.1355 6.68758 20.3959 4.948 17.7084 4.948H7.29171Z"
          fill="#6C3EB8"
        />
        <path
          d="M11.0312 16.1771C10.7292 16.1771 10.4375 16.1042 10.1771 15.9584C9.57292 15.6146 9.21875 14.9167 9.21875 14.0521V10.9688C9.21875 10.1042 9.5625 9.40628 10.1771 9.06253C10.7813 8.71878 11.5625 8.78128 12.3021 9.22919L14.875 10.7709C15.5833 11.1979 15.9896 11.8334 15.9896 12.5104C15.9896 13.1875 15.5833 13.8229 14.875 14.25L12.3021 15.7917C11.875 16.0417 11.4375 16.1771 11.0312 16.1771ZM11.0312 10.3854C10.9988 10.385 10.9667 10.3921 10.9375 10.4063C10.8646 10.4479 10.7813 10.6354 10.7813 10.9584V14.0417C10.7813 14.3542 10.8646 14.5417 10.9375 14.5938C11.0208 14.6354 11.2187 14.6146 11.4896 14.4479L14.0625 12.9063C14.3229 12.75 14.4167 12.5938 14.4167 12.5C14.4167 12.4063 14.3229 12.2604 14.0625 12.0938L11.4896 10.5521C11.3021 10.4375 11.1354 10.3854 11.0312 10.3854Z"
          fill="#6C3EB8"
        />
      </svg>
    );
  }

  if (icon === "cart") {
    return (
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.94 17.06L16.26 7.31C16.1453 6.47997 15.7404 5.71734 15.1172 5.15725C14.4939 4.59716 13.6926 4.27576 12.855 4.25H12.75C12.75 3.25544 12.3549 2.30161 11.6517 1.59835C10.9484 0.895088 9.99458 0.5 9.00002 0.5C8.00546 0.5 7.05163 0.895088 6.34837 1.59835C5.64511 2.30161 5.25002 3.25544 5.25002 4.25H5.14502C4.30749 4.27576 3.50611 4.59716 2.88287 5.15725C2.25963 5.71734 1.85477 6.47997 1.74002 7.31L0.0600206 17.06C-0.0431661 17.6256 -0.0207379 18.2071 0.125717 18.7631C0.272172 19.3191 0.539073 19.8361 0.907521 20.2775C1.21796 20.6565 1.60803 20.9625 2.05003 21.1738C2.49204 21.385 2.97513 21.4964 3.46502 21.5H14.535C15.0249 21.4964 15.508 21.385 15.95 21.1738C16.392 20.9625 16.7821 20.6565 17.0925 20.2775C17.461 19.8361 17.7279 19.3191 17.8743 18.7631C18.0208 18.2071 18.0432 17.6256 17.94 17.06ZM9.00002 2C9.59676 2 10.1691 2.23705 10.591 2.65901C11.013 3.08097 11.25 3.65326 11.25 4.25H6.75002C6.75002 3.65326 6.98707 3.08097 7.40903 2.65901C7.83099 2.23705 8.40328 2 9.00002 2ZM15.945 19.31C15.7755 19.522 15.5612 19.6938 15.3174 19.8131C15.0736 19.9325 14.8064 19.9963 14.535 20H3.46502C3.19362 19.9963 2.92643 19.9325 2.68263 19.8131C2.43883 19.6938 2.2245 19.522 2.05502 19.31C1.82646 19.0365 1.66149 18.7157 1.57199 18.3707C1.4825 18.0257 1.47073 17.6651 1.53752 17.315L3.21752 7.565C3.27335 7.08382 3.49737 6.63782 3.85004 6.30574C4.20271 5.97365 4.66135 5.77683 5.14502 5.75H12.855C13.3387 5.77683 13.7973 5.97365 14.15 6.30574C14.5027 6.63782 14.7267 7.08382 14.7825 7.565L16.4625 17.315C16.5293 17.6651 16.5175 18.0257 16.428 18.3707C16.3386 18.7157 16.1736 19.0365 15.945 19.31Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon === "favorite") {
    return (
      <svg
        width="24"
        height="21"
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 11C0.75 8 1.5 3.5 5.25 2C9 0.5 11.25 3.5 12 5C12.75 3.5 15.75 0.5 19.5 2C23.25 3.5 23.25 8 21 11C18.75 14 12 20 12 20C12 20 5.25 14 3 11Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
};
