import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePassword } from '../../../hooks/usePassword';

//. styles
import styles from './Checkbox.module.css';

export default function Checkbox({ text, type, action }) {
  const [value, setValue] = useState(type);

  const handleClick = () => {
    setValue(prev => !prev);
  };

  useEffect(() => {
    action(value);
  }, [value]);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.checkbox} ${value ? styles.checked : ''}`}
        onClick={handleClick}
      >
        <AnimatePresence>
          {value && (
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
      <span>
        {text === 'uppercase' || text === 'lowercase'
          ? `${text} letters`
          : text}
      </span>
    </div>
  );
}
