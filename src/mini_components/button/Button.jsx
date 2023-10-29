import styles from "./Button.module.scss";

const Button = ({
  button_text,
  button_bgColor,
  button_color,
  paddingInline,
  height,
}) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: button_bgColor,
          color: button_color,
          paddingInline: paddingInline,
          height: height,
        }}
      >
        {button_text}
      </button>
    </div>
  );
};

export default Button;
