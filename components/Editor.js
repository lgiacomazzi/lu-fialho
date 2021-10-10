import { useMemo, useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import Icon from "./Icon"
import Button from "./Button"

const Editor = () => {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([{ type: 'heading1', children: [{ text: 'A line of text in a paragraph.' }], },])
    return (
        <Slate
            editor={editor}
            value={value}
            onChange={newValue => setValue(newValue)}
        >
            <Button variant='primary'><Icon icon="link" size="20" /></Button>
            <Editable onKeyDown={event => { console.log(event.key) }} />
        </Slate>)
}

export default Editor
