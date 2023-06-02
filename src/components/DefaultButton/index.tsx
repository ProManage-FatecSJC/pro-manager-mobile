import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps &{
    title?: string;
    textColor?: string;
}

export function DefaultButton({ title, textColor, ...rest }: Props) {
  return (
    <ButtonNativeBase 
    bg="#00688C"
    h={12}
    fontSize="lg"
    rounded="sm"
    _pressed={{
        bg: "blueGray.700"
    }}
       
    { ...rest }
    >
        <Heading color={textColor || "white"} fontSize="lg">
            {title}
        </Heading>
    </ButtonNativeBase>
  );
}