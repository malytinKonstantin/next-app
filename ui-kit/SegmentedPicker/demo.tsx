import { SegmentedPicker } from '@/ui-kit/SegmentedPicker/SegmentedPicker';
import { Title } from '@/ui-kit';

const asyncChange = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

export const SegmentPickerDemo = () => {
  const itemSet1 = [
    { label: 'January', value: '1' },
    { label: 'March', value: '2' },
    { label: 'June', value: '3', disabled: true },
    { label: 'December', value: '4' },
  ];

  const itemSet2 = [
    { label: 'January', value: '1' },
    { label: 'March', value: '2' },
    { label: 'June', value: '3' },
  ];

  const itemSet3 = [
    { label: 'January', value: '1' },
    { label: 'March', value: '2' },
    { label: 'June', value: '3' },
    { label: 'December', value: '4' },
  ];

  const itemSet4 = [
    { label: 'On', value: '1' },
    { label: 'Off', value: '2' },
  ];

  return (
    <>
      <div>
        <Title level={3} align="left">
          Segment Picker without loading state
        </Title>
        <Title level={4} align="left">
          Justify "content"
        </Title>
        <div style={{ width: '600px' }}>
          <SegmentedPicker
            items={itemSet1}
            block
            justify="content"
            defaultValue={'1'}
            mb={20}
          />
        </div>
        <Title level={4} align="left">
          Justify "even"
        </Title>
        <div style={{ width: '600px' }}>
          <SegmentedPicker items={itemSet1} block defaultValue={'1'} mb={20} />
        </div>
        <SegmentedPicker items={itemSet2} block={false} mb={20} />
        <SegmentedPicker items={itemSet3} block defaultValue={'3'} mb={20} />
        <div style={{ width: '300px' }}>
          <SegmentedPicker items={itemSet4} block defaultValue={'1'} mb={20} />
        </div>
      </div>
      <div>
        <Title level={3} align="left">
          Segment Picker with loading state
        </Title>
        <div style={{ width: '600px' }}>
          <SegmentedPicker
            items={itemSet1}
            block
            defaultValue={'1'}
            onChange={asyncChange}
            mb={20}
          />
        </div>
      </div>
    </>
  );
};
