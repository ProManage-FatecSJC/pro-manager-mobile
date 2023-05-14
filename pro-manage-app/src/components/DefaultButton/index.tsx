import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps &{
    title?: string;
}

export function DefaultButton({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase 
    bg="#00688C"
    h={12}
    marginTop={30}
    fontSize="lg"
    rounded="sm"
    _pressed={{
        bg: "blueGray.700"
    }}
    { ...rest }
    >
        <Heading color="white" fontSize="lg">
            {title}
        </Heading>
    </ButtonNativeBase>
  );
}