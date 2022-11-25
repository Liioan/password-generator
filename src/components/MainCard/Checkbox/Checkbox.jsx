import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//. styles
import styles from './Checkbox.module.css';

export default function Checkbox({ text, type }) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (type === 'uper' || type === 'lowr') {
      setIsClicked('true');
    }
  }, [type]);

  const handleClick = type => {
    setIsClicked(prev => (prev = !prev));
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.checkbox} ${isClicked ? styles.checked : ''}`}
        onClick={() => handleClick(type)}
      >
        <AnimatePresence>
          {isClicked && (
            <motion.span
              className='material-symbols-outlined'
              initial={{ opacity: 0, translateX: '-100%' }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: '100%' }}
              transition={{ duration: 0.5, ease: 'anticipate' }}
            >
              check
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      <span>{text}</span>
    </div>
  );
}
