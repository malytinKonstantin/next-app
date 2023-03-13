import { Checkbox } from './index';
import { Title } from '@/ui-kit';

export const CheckboxDemo = () => {
  return (
    <div>
      <Title level={2} align="left">
        Checkbox
      </Title>
      <Checkbox mb={20} label="Label" />
      <Checkbox mb={20} label="Label" checked />
      <div style={{ display: 'flex', gap: '12px' }}>
        <Checkbox mb={20} label="Label" disabled />
        <Checkbox mb={20} label="Label" checked disabled />
        <Checkbox mb={20} label="Label" checked disabled error block={false} />
        <Checkbox mb={20} label="Label" indeterminate block={false} />
        <Checkbox mb={20} label="Label" indeterminate={false} />
      </div>
      <Checkbox mb={20} label="Label" indeterminate disabled />
      <Checkbox mb={20} label="Label" indeterminate error />
    </div>
  );
};
