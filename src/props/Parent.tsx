import { ChildAsFc } from './Child';

export const Parent = () => {
  return <ChildAsFc color='red' onClick={() => console.log('click')}>
    arbitrary
    </ChildAsFc>
};