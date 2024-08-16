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
import { cookies } from "next/headers";

export default async function Page() {
	'use server'
	return (
		<div className="grid h-screen w-full place-content-center">
			<form action={createInvoice}>
				<Card className=" w-96 relative">
					<ModeToggle className="absolute top-0 right-0"></ModeToggle>
					<CardHeader>
						<CardTitle className="text-2xl">登录</CardTitle>
						<CardDescription>
							请输入您的账号和密码进行登录.
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<div className="grid gap-2">
							账号<Input name="email" type="text" required />
						</div>
						<div className="grid gap-2">
							密码<Input name="password" type="password" required />
						</div>
					</CardContent>
					<CardFooter>
						<Button className="w-full">登陆</Button>
					</CardFooter>
				</Card>
			</form>
		</div>
	)
}

async function createInvoice(formData:FormData) {
	'use server'
	cookies().delete("a");
	return formData;
}