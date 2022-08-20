import { Button } from "antd"
import Link from 'next/link'

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>This is about page</p>
            <Link href="/">
                <Button type="primary">Home</Button>
            </Link>
        </div>
    )
}