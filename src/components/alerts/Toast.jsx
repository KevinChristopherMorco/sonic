import React from "react";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  iconColor: "white",
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true,
  customClass: "text-[.8rem]",
  position: "top-end",
});

export const SuccessToast = (primaryText, secondaryText) => {
  return Toast.fire({
    icon: "success",
    background: "white",
    iconColor: "var(--brand-color)",
    html: `<p class=font-bold> ${primaryText} </p> <p class=text-gray-400>${secondaryText}</p>`,
  });
};
