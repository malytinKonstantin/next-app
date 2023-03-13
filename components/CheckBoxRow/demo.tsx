import { CheckBoxRow } from './CheckBoxRow';

export const DemoCheckboxRow = () => {
  return (
    <div>
      <CheckBoxRow mb={20} price={'0'} checkBoxProps={{ label: 'Label' }} />
      <CheckBoxRow
        mb={20}
        price={'0'}
        checkBoxProps={{ label: 'Label', checked: true }}
      />
      <CheckBoxRow
        mb={20}
        price={'0'}
        checkBoxProps={{ label: 'Label', disabled: true }}
      />
      <CheckBoxRow
        mb={20}
        price={'0'}
        checkBoxProps={{ label: 'Label', checked: true, error: true }}
      />
      <CheckBoxRow mb={20} checkBoxProps={{ label: 'Label' }} />
    </div>
  );
};
