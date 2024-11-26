import React, { forwardRef, memo } from "react";
import classnames from "classnames";
import "./index.scss";

const FieldContainer: React.FC<{
  children: any;
  label?: string | null;
  horizontal?: boolean;
  className?: string;
  labelClassName?: string;
  large?: boolean;
}> = forwardRef(
  ({ children, label, className, labelClassName, horizontal, large }, ref) => {
    return (
      <div
        className={classnames("field-container", className, {
          horizontal,
          large,
        })}
      >
        {label && (
          <label className={classnames("field-label", labelClassName)}>
            {label}
          </label>
        )}
        <div className={"field-section"}>{children}</div>
      </div>
    );
  }
);

export default memo(FieldContainer);
