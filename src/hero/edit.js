import {useBlockProps} from "@wordpress/block-editor"

export default function Edit(){
	const blockProps = useBlockProps()

	return(
		<div {...blockProps}>
			<div className="placeholder-block hero-block">
				<h1>Hero Placeholder</h1>
			</div>
		</div>
	)
}