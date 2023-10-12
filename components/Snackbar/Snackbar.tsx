import { useEffect } from 'react';
import RnSnackbar, { SnackbarComponentProps } from 'react-native-snackbar-component'
import tw from '../tailwind';

export default function Snackbar(props: SnackbarComponentProps & {
	setVisible: (value: boolean) => void;
}) {
	useEffect(() => {
		setTimeout(() => {
			props.setVisible(false);
		}, 1000 * 3)
	}, [props.visible])

	return (
		<RnSnackbar
			visible={true}
			messageStyle={tw`m-3 p-2 bg-lime-400 rounded-2`}
			backgroundColor='transparent'
			{...props}
		/>
	)
}