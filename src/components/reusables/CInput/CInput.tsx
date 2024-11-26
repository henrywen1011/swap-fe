import React, {
  memo,
  useRef,
  useState,
  useLayoutEffect,
  RefObject,
} from "react";
import classnames from "classnames";
import { forceNumeric, format, isValidNumber } from "@utils/number";
import styles from "./CInput.module.scss";
import { NOOP } from "@constants/types";
import Placeholder from "../Placeholder";

const CInput: React.FC<{
  containerClassName?: string;
  inputContainerClassName?: string;
  prefix?: string | React.ReactElement;
  id?: string;
  error?: boolean;
  textCenter?: boolean;
  disabled?: boolean;
  className?: string;
  value?: string | number;
  suffix?: string | React.ReactElement;
  autoSize?: boolean;
  required?: boolean;
  onlyNumbers?: boolean;
  onlyInteger?: boolean;
  autoComplete?: string;
  fill?: boolean;
  squard?: boolean;
  pilled?: boolean;
  bordered?: boolean;
  autoFocus?: boolean;
  big?: boolean;
  large?: boolean;
  precision?: number;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  loading?: boolean;
  customRef?: RefObject<HTMLInputElement>;
  children?: React.ReactNode;
  onChange?: (value: string, e?: any) => void;
  onBlur?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  onFocus?: (e: any) => void;
  onClick?: (e: any) => void;
}> = ({
  containerClassName,
  inputContainerClassName,
  className,
  prefix,
  id,
  textCenter,
  value,
  suffix,
  autoSize,
  onlyNumbers,
  onlyInteger,
  fill,
  squard,
  pilled,
  required,
  bordered,
  disabled,
  precision = 0,
  autoComplete = "off",
  autoFocus,
  error,
  big,
  large,
  type = "text",
  customRef,
  children = null,
  maxLength,
  loading,
  onChange = NOOP,
  onBlur = NOOP,
  onFocus = NOOP,
  onKeyDown = NOOP,
  onClick = NOOP,
  ...rest
}) => {
  const hiddenLabelRef = useRef<HTMLLabelElement>(null);
  const [inputWidth, setInputWidth] = useState<number>(0);
  const [active, setActive] = useState(false);

  useLayoutEffect(() => {
    if (autoSize && hiddenLabelRef.current) {
      setInputWidth(
        Math.ceil(hiddenLabelRef.current.getBoundingClientRect().width + 7)
      );
    }
  }, [value]);

  const handleOnChange = (e: any) => {
    if (onlyNumbers || onlyInteger) {
      const numberText = forceNumeric(e.target.value);

      if (isValidNumber(numberText, precision + 1, onlyInteger)) {
        const input = e.target;
        const currentCursor = input.selectionStart;
        const [integerPart, decimalPart] = numberText.split(".");
        const generatedNumber =
          integerPart +
          (decimalPart === undefined
            ? ""
            : "." + decimalPart.substring(0, precision));

        onChange(generatedNumber, e);
      }

      return;
    }

    onChange(e.target.value, e);
  };

  const handleOnBlur = (e: any) => {
    setActive(false);
    if (!autoFocus && (onlyNumbers || onlyInteger)) {
      let formattedText = format(e.target.value, {
        precision,
        noCommas: true,
        removeZeroEnd: true,
      });

      if (e.target.value !== "0" && formattedText === "0") {
        formattedText = "";
      }
      onChange(formattedText, e);
    }

    onBlur(e);
  };

  const handleFocus = (e: any) => {
    setActive(true);
    onFocus(e);
  };

  const handleKeyDown = (e: any) => {
    onKeyDown(e);
  };

  return (
    <div
      className={classnames(styles.custom_input, containerClassName, {
        [styles._fill]: fill,
        [styles._squard]: squard,
        [styles._border]: bordered,
        [styles._pilled]: pilled,
        [styles._focus]: active,
      })}
    >
      {children}
      <div
        className={classnames(styles.input_container, inputContainerClassName, {
          [styles._big]: big,
          [styles._large]: large,
          [styles._error]: error,
          [styles._disabled]: disabled,
        })}
      >
        {autoSize && (
          <label className="hidden-label" ref={hiddenLabelRef}>
            {value}
          </label>
        )}

        {prefix && <div className={styles._prefix}>{prefix}</div>}
        {loading ? (
          <div className="ml-2">
            <Placeholder />
          </div>
        ) : (
          <input
            ref={customRef}
            type={type}
            id={id}
            required={required}
            className={classnames(className, {
              [styles.auto_size]: autoSize,
              ["text-center"]: textCenter,
            })}
            style={{ width: inputWidth && autoSize ? inputWidth : "" }}
            value={value}
            disabled={disabled}
            maxLength={maxLength}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            autoComplete={autoComplete}
            {...rest}
          />
        )}

        {suffix && <div className={styles._suffix}>{suffix}</div>}
      </div>
    </div>
  );
};

export default memo(CInput);
