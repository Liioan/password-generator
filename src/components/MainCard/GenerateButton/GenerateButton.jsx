import { usePassword } from '../../../hooks/usePassword';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

//. styles
import styles from './GenerateButton.module.css';

export default function GenerateButton() {
  const [error, setError] = useState(false);

  const { generatePassword } = usePassword();

  const handleClick = () => {
    const result = generatePassword();
    if (result === '#ERR') {
      setError('cannot generate empty password');
    } else {
      setError(false);
    }
  };

  useEffect(() => {
    if (!error) {
      return;
    }
    const timeout = setTimeout(() => {
      setError(false);
    }, 2500);

    return () => {
      clearInterval(timeout);
    };
  }, [error]);

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {error && (
          <motion.span
            className={styles.error}
            initial={{ opacity: 0, translateX: '-100%' }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: '100%' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
      <button onClick={handleClick} className={styles.btn}>
        generate
      </button>
    </div>
  );
}
