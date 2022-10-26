import { toast } from '@zerodevx/svelte-toast';

export const success = (message: string) =>
	toast.push(message, {
		theme: {
			'--toastBackground': '#65C3C8',
			'--toastColor': '#003A3D',
			'--toastBarBackground': '#003A3D'
		}
	});

export const warning = (message: string) =>
	toast.push(message, {
		theme: {
			'--toastBackground': 'red',
			'--toastColor': 'white',
			'--toastBarBackground': 'olive'
		}
	});

export const failure = (message: string) =>
	toast.push(message, {
		theme: {
			'--toastBackground': 'yellow',
			'--toastColor': 'white',
			'--toastBarBackground': 'olive'
		}
	});
