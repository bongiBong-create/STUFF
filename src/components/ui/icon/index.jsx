export const Icon = ({ icon }) => {
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
