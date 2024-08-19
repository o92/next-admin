import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle";
import Verify from "@/components/verify/puzzle-captcha";

export default async function Page() {
	'use server'
	return (
		<div className="grid h-screen w-full place-content-center">
			<form action={createInvoice}>
				<Card className="w-96 relative">
					<CardHeader>
						<CardTitle className="relative text-2xl">登录<ModeToggle className="absolute right-0"></ModeToggle></CardTitle>
						
						<CardDescription>
							请输入您的账号和密码进行登录.
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<div className="grid gap-2">
							账号<Input name="username" type="text" required />
						</div>
						<div className="grid gap-2">
							密码<Input name="password" type="password" required />
						</div>
					</CardContent>
					<CardFooter>
						<Button className="w-full">登陆</Button>
					</CardFooter>
				</Card>
				<Verify></Verify>
			</form>
		</div>
	)
}

async function createInvoice(formData:FormData) {
	'use server'
	// cookies().delete("a");

	return formData;
}