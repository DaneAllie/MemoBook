import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Memo() {
	const [notes, setnotes] = useState(() => {
		const savednotes = localStorage.getItem("notes");
		if (savednotes) {
			return JSON.parse(savednotes);
		} else {
			return [];
		}
	});
	const [note, setNotes] = useState("");

	const [editing, setediting] = useState(false);
	const [currentNotes, setCurrentNotes] = useState({});

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	function handleInputChange(e) {
		setNotes(e.target.value);
	}

	function handleEditInputChange(e) {
		setCurrentNotes({ ...currentNotes, text: e.target.value });
		console.log(currentNotes);
	}

	function handleFormSubmit(e) {
		e.preventDefault();

		if (note !== "") {
			setnotes([
				...notes,
				{
					id: notes.length + 1,
					text: note.trim()
				}
			]);
		}

		setNotes("");
	}

	function handleEditFormSubmit(e) {
		e.preventDefault();

		handleUpdatenote(currentNotes.id, currentNotes);
	}

	function handleDeleteClick(id) {
		const removeItem = notes.filter((note) => {
			return note.id !== id;
		});
		setnotes(removeItem);
	}

	function handleUpdatenote(id, updatednote) {
		const updatedItem = notes.map((note) => {
			return note.id === id ? updatednote : note;
		});
		setediting(false);
		setnotes(updatedItem);
	}

	function handleEditClick(note) {
		setediting(true);
		setCurrentNotes({ ...note });
	}

	return (
		<div className='App'>
			<div className='content-area group'>
				<Header />

				<div className='container'>
					{editing ? (
						<div>
							<form onSubmit={handleEditFormSubmit}>
								<h2>Edit Datebase Entry</h2>
								<label htmlFor='editnote'>Edit Datebase Entry: </label>
								<br></br>
								<input name='editnote' type='text' placeholder='Edit note' value={currentNotes.text} onChange={handleEditInputChange} />
								<button type='submit'>Update</button>
								<button onClick={() => setediting(false)}>Cancel</button>
							</form>
							<br></br>
							<br></br>
						</div>
					) : (
						<div>
							<form onSubmit={handleFormSubmit}>
								<h2>My Datebase Entry</h2>
								<label htmlFor='note'>Add Note: </label>
								<br></br>
								<br></br>
								<input name='note' type='text' placeholder='Create a new note' value={note} onChange={handleInputChange} />
								<br></br>
								<br></br>
								<button type='submit'>Add Datebase Entry</button>
								<br></br>
							</form>
							<br></br>
						</div>
					)}

					<div className='output'>
						<ul className='note-list'>
							<h2>My Notes</h2>
							<br></br>
							{notes.map((note) => (
								<div>
									<li key={note.id}>
										{note.text}
										<button onClick={() => handleEditClick(note)}>Edit</button>

										<button onClick={() => handleDeleteClick(note.id)}>Delete</button>
									</li>

									<br></br>
								</div>
							))}
						</ul>
					</div>
				</div>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</div>
			<Footer />
		</div>
	);
}
