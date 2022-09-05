import { invoke } from '@tauri-apps/api/tauri';
import Container from '../components/Container';
import Navbar from '../components/Navbar';

function App() {
	const handleDisplayPath = async () => {
		const data = await invoke('display_path', { name: 'test' });
		console.log(data);
	};

	return (
		<div className="flex justify-center items-center h-full">
			<div className="w-3/4 flex flex-col h-full ">
				<Navbar />
				<Container />
			</div>
		</div>
	);
}

export default App;
