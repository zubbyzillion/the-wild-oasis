// import Spinner from 'ui/Spinner';
// import { useSettings } from 'features/settings/useSettings';
// import { useUpdateSetting } from 'features/settings/useUpdateSetting';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

function UpdateSettingsForm() {
  // const {
  //   settings: {
  //     minBookingLength,
  //     maxBookingLength,
  //     maxGuestsPerBooking,
  //     breakfastPrice,
  //   } = {},
  //   isLoading,
  // } = useSettings();
  // const { mutate: updateSetting, isLoading: isUpdating } = useUpdateSetting();

  // // return <Spinner />;
  // if (isLoading) return <Spinner />;

  // function handleBlur(e, field) {
  //   const { value } = e.target;

  //   if (!value) return;
  //   updateSetting({ [field]: value });
  // }

  // // This time we are using UNCONTROLLED fields, so we will NOT store state
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'
          
          id='min-nights'
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'
          
          id='max-nights'
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'
          
          id='max-guests'
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input
          type='number'
          
          id='breakfast-price'
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
