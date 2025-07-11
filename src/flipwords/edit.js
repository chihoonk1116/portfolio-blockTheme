import { useState } from "react";
import { ToolbarGroup, ToolbarButton, Button, TextControl } from "@wordpress/components"
import { BlockControls, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit({attributes, setAttributes}) {

	const { size, words} = attributes
	const blockProps = useBlockProps()

	const [newWord, setNewWord] = useState()

	function addWord() {
		if(!newWord.trim()) return
		setAttributes({words:[...words, newWord.trim()]})
		setNewWord("")
	}

	function removeWord(index){
		const updated = words.filter((_, i) => i != index)
		setAttributes({words: updated})
	}



	return (
		<div {...blockProps}>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						isPressed={size === "large"}
						onClick={() => setAttributes({size: "large"})}
					>
						Large
					</ToolbarButton>
					<ToolbarButton
						isPressed={size === "medium"}
						onClick={() => setAttributes({size: "medium"})}
					>
						Medium
					</ToolbarButton>
					<ToolbarButton
						isPressed={size === "small"}
						onClick={() => setAttributes({size: "small"})}
					>
						Small
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>

			<div className="">
				<h4>Words:</h4>
				<ul>
					{words.map((word, i) => (
						<li key={i}>
							{word}
							<Button
								isDestructive
								onClick={() => removeWord(i)}	
							>
								Remove
							</Button>
						</li>
					))}
				</ul>

				<TextControl
					label="Add Word"
					value={newWord}
					onChange={(val) => setNewWord(val)}
				/>
					<Button
						variant="primary"
						onClick={addWord}
					>
						Add
					</Button>
			</div>
		</div>
	);
}
