import {useBlockProps} from "@wordpress/block-editor"

export default function Edit(){
	const blockProps = useBlockProps()

	return(
		<div {...blockProps}>
			<div className="placeholder-block">
				<h1>Navbar Placeholder</h1>
			</div>
		</div>
	)
}