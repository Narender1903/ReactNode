
import React, { useCallback, useEffect } from 'react';

export const HR = ({
    value,
    requirements,
    onValidChange,
  }) => {
  const validChangeCb = useCallback(onValidChange, []);

  useEffect(() => {
    validChangeCb(
      requirements.every(r => r.validator(value))
    );
  }, [value, requirements, validChangeCb]);

  return <h1>sdaf</h1>;
};
