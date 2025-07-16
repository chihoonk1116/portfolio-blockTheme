import {useBlockProps} from "@wordpress/block-editor"

export default function Edit(){
	const blockProps = useBlockProps()

	return(
		<div {...blockProps}>
			<div className="placeholder-block skillset-block">
				<h1>Skillset Placeholder</h1>
			</div>
		</div>
	)
}