import { useEffect } from 'react';
import RnSnackbar, { SnackbarComponentProps } from 'react-native-snackbar-component'

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
			{...props}
		/>
	)
}