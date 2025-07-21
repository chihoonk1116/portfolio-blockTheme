import {useBlockProps} from "@wordpress/block-editor"

export default function Edit(){
	const blockProps = useBlockProps()

	return(
		<div {...blockProps}>
			<div className="placeholder-block aboutme-block">
				<h1>Aboutme Placeholder</h1>
			</div>
		</div>
	)
}