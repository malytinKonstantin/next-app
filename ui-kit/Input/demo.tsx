import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useState,
} from 'react';
import { Spinner } from '@/components/Spinner';
import { ValidationStatus } from '@/ui-kit/base/InputBase/types';
import { Input } from './Input';
import { Color } from '../@constants';

const spinnerProps = {
  size: 24,
  fill: Color.foodCity.Black_Oven_35,
};

export const DemoInputs = () => {
  const [value2, setValue2] = useState('');
  const [result2, setResult2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [result4, setResult4] = useState('');
  const [isSearchValue4, setIsSearchValue4] = useState(false);

  const handleChange2 = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setValue2(evt.target.value);
    },
    [setValue2],
  );

  const searchValue2 = useCallback(() => {
    setTimeout(() => {
      setResult2(value2);
    }, 1000);
  }, [value2, setResult2]);

  const handleChange4 = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setValue4(evt.target.value);
    },
    [setValue4],
  );

  const handleChange3 = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setValue3(evt.target.value);
    },
    [setValue3],
  );

  const clearValue3 = useCallback(() => {
    setValue3('');
  }, [setValue3]);

  const searchValue4 = useCallback(() => {
    setIsSearchValue4(true);

    setTimeout(() => {
      setIsSearchValue4(false);
      setResult4(value4);
    }, 1000);
  }, [value4, setResult4, setIsSearchValue4]);

  const clearValue4 = useCallback(() => {
    setValue4('');
    setResult4('');
  }, [setValue4]);

  const hanleKeyDown4 = useCallback(
    (evt: KeyboardEvent) => {
      switch (evt.code) {
        case 'Enter':
          searchValue4();
          break;
        case 'Escape':
          clearValue4();
          break;
      }
    },
    [searchValue4, clearValue4],
  );

  const validationError = {
    status: ValidationStatus.error,
    message: 'Error messages text goes here',
  };
  const validationSuccess = {
    status: ValidationStatus.success,
    message: 'Success messages text goes here',
  };
  const helpMessage = 'Helper text goes here';

  return (
    <>
      <div style={{ padding: 50, display: 'flex' }}>
        <div style={{ flexBasis: '25%', width: '25%', padding: '5px' }}>
          <Input
            required
            label="Error input"
            placeholder="Placeholder"
            validation={validationError}
            mb={15}
          />
          <Input
            placeholder="Placeholder"
            rightButton={{
              icon: 'closeFill',
            }}
            validation={validationError}
            mb={15}
          />
        </div>

        <div style={{ flexBasis: '25%', width: '25%', padding: '5px' }}>
          <Input
            label="Success input"
            placeholder="Placeholder"
            validation={validationSuccess}
            mb={15}
          />
          <Input
            placeholder="Placeholder"
            rightButton={{
              icon: 'closeFill',
            }}
            validation={validationSuccess}
            mb={15}
          />
        </div>

        <div style={{ flexBasis: '25%', width: '25%', padding: '5px' }}>
          <Input
            disabled
            label="Disabled input"
            placeholder="Placeholder"
            helpMessage={helpMessage}
            mb={15}
          />
          <Input
            disabled
            placeholder="Placeholder"
            rightButton={{
              icon: 'closeFill',
            }}
            helpMessage={helpMessage}
            mb={15}
          />
        </div>
      </div>

      <div style={{ padding: 50, paddingTop: 0, display: 'flex' }}>
        <div style={{ flexBasis: '25%', width: '25%', padding: '5px' }}>
          <Input
            label="Left Button"
            leftButton={{
              icon: 'research',
              onClick: searchValue2,
            }}
            rightButton={{
              children: <Spinner {...spinnerProps} />,
            }}
            onChange={handleChange2}
            placeholder="Placeholder"
            helpMessage={`Search result: ${result2}`}
            mb={15}
          />
          <Input
            placeholder="Placeholder"
            leftButton={{
              icon: 'research',
            }}
            helpMessage="Left icon only read"
            mb={15}
          />
        </div>

        <div style={{ flexBasis: '25%', width: '25%', padding: '5px' }}>
          <Input
            label="Right Button"
            rightButton={{
              icon: 'closeFill',
              onClick: clearValue3,
            }}
            value={value3}
            onChange={handleChange3}
            placeholder="Placeholder"
            helpMessage="This input can clear"
            mb={15}
          />
          <Input
            placeholder="Placeholder"
            rightButton={{
              icon: 'closeFill',
            }}
            helpMessage="Right icon only read"
            mb={15}
          />
        </div>

        <div style={{ flexBasis: '25%', width: '25%', padding: '5px' }}>
          <Input
            label="All Buttons and required"
            leftButton={{
              icon: 'research',
              onClick: searchValue4,
            }}
            rightButton={{
              icon: 'closeFill',
              children: isSearchValue4 ? <Spinner {...spinnerProps} /> : null,
              onClick: clearValue4,
            }}
            required
            placeholder="Placeholder"
            value={value4}
            onChange={handleChange4}
            onKeyDown={hanleKeyDown4}
            helpMessage={`Search result: ${result4}`}
            mb={15}
          />
          <Input
            placeholder="Placeholder"
            leftButton={{
              icon: 'research',
            }}
            rightButton={{
              icon: 'closeFill',
            }}
            helpMessage="Icons only read"
            mb={15}
          />
        </div>
      </div>
    </>
  );
};
