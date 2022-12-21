import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { usePassword } from '../../../hooks/usePassword';
import { AnimatePresence, motion } from 'framer-motion';

//.styles
import styles from './PasswordCopy.module.css';

export default function PasswordCopy({}) {
  const { password: generatedPassword } = usePassword();
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    if (isCopied === false) {
      return;
    }
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied]);

  const handleClick = () => {
    if (generatedPassword.length) {
      setIsCopied(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <span>{generatedPassword}</span>
        <CopyToClipboard text={generatedPassword} onCopy={handleClick}>
          <button className={styles.copy}>
            <span className='material-symbols-outlined'>content_copy</span>
          </button>
        </CopyToClipboard>
      </div>
      <AnimatePresence>
        {isCopied && (
          <motion.span
            className={styles.copied}
            initial={{ opacity: 0, translateX: '-100%' }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: '100%' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            copied to clipboard
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
