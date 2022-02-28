import Link from 'next/link';
import styles from '@styles/components/Button.module.css';

interface props {
  children?: string;
  linkTo?: string;
  types?: string;
  color?: string;
  fill?: string;
  expand?: string;
  size?: string;
  errorText?: string;
  submittingText?: string;
  as?: string;
  target?: string;
  classNames?: string;
}

const Button = ({
  children,
  linkTo,
  types,
  color,
  size,
  fill,
  expand,
  classNames,
  errorText,
  as,
  submittingText,
}: props) => {
  {
    if (color == 'primary') {
      if (size == 'small') {
        if (expand == 'block') {
          classNames = `${styles.btn} ${styles.primary} ${styles.small} ${styles.block}`;
          if (fill == 'outline') {
            classNames = `${styles.btn} ${styles.primary} ${styles.small} ${styles.outline} ${styles.block}`;
          }
        } else {
          classNames = `${styles.btn} ${styles.primary} ${styles.small}`;
          if (fill == 'outline') {
            classNames = `${styles.btn} ${styles.primary} ${styles.small} ${styles.outline}`;
          }
        }
      }
      if (size == 'default') {
        if (expand == 'block') {
          classNames = `${styles.btn} ${styles.primary} ${styles.block}`;
          if (fill == 'outline') {
            classNames = `${styles.btn} ${styles.primary} ${styles.outline} ${styles.block}`;
          }
        } else {
          classNames = `${styles.btn} ${styles.primary}`;
          if (fill == 'outline') {
            classNames = `${styles.btn} ${styles.primary} ${styles.outline}`;
          }
        }
      }
      if (size == 'large') {
        if (expand == 'block') {
          classNames = `${styles.btn} ${styles.primary}  ${styles.large} ${styles.block}`;
          if (fill == 'outline') {
            classNames = `${styles.btn} ${styles.primary} ${styles.outline} ${styles.large} ${styles.block}`;
          }
        } else {
          classNames = `${styles.btn} ${styles.primary}  ${styles.large}`;
          if (fill == 'outline') {
            classNames = `${styles.btn} ${styles.primary} ${styles.outline} ${styles.large}`;
          }
        }
      }
    }
    if (color == 'white') {
      if (size == 'small') {
        if (expand == 'block') {
          classNames = `${styles.btn} ${styles.white} ${styles.small} ${styles.block}`;
          if (fill == 'outline') {
            classNames = `${styles.btn} ${styles.white} ${styles.small} ${styles.outline} ${styles.block}`;
          }
        } else {
          classNames = `${styles.btn} ${styles.white} ${styles.small}`;
          if (fill == 'outline') {
            classNames = `${styles.btn} ${styles.white} ${styles.small} ${styles.outline}`;
          }
        }
      }
      if (size == 'default') {
        if (expand == 'block') {
          classNames = `${styles.btn} ${styles.white} ${styles.block}`;
          if (fill == 'outline') {
            classNames = `${styles.btn} ${styles.white} ${styles.outline} ${styles.block}`;
          }
        } else {
          classNames = `${styles.btn} ${styles.white}`;
          if (fill == 'outline') {
            classNames = `${styles.btn} ${styles.white} ${styles.outline}`;
          }
        }
      }
      if (size == 'large') {
        if (expand == 'block') {
          classNames = `${styles.btn} ${styles.white}  ${styles.large} ${styles.block}`;
          if (fill == 'outline') {
            classNames = `${styles.btn} ${styles.white} ${styles.outline} ${styles.large} ${styles.block}`;
          }
        } else {
          classNames = `${styles.btn} ${styles.white}  ${styles.large}`;
          if (fill == 'outline') {
            classNames = `${styles.btn} ${styles.white} ${styles.outline} ${styles.large}`;
          }
        }
      }
    }
  }

  return (
    <>
      {types == 'button' ? (
        <button
          type="submit"
          className={classNames}
          data-formrun-error-text={errorText}
          data-formrun-submitting-text={submittingText}
        >
          {children}
        </button>
      ) : (
        <Link href={`${linkTo}`} as={as}>
          <a className={classNames}>{children}</a>
        </Link>
      )}
    </>
  );
};

export default Button;
