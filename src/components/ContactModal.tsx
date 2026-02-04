import { useState } from "react";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea"; // Assuming this exists based on list, else use placeholder textarea
import { Mail } from "lucide-react";

export function ContactModal({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | React.ChangeEvent<HTMLTextAreaElement>>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submission started");
        setLoading(true);
        setStatus("Sending...");

        // REPLACE THIS WITH YOUR NEW GOOGLE APPS SCRIPT WEB APP URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzLK9PvnDKihhMQaIZBV_CJD9dkqo-V-woAiKzKzbUE23xSo4x0o1m4mgBFVz3ALzNh/exec';
        console.log("Using Script URL:", scriptURL);

        const form = new FormData();
        // These keys must match the headers in your Google Sheet exactly!
        form.append('timestamp', new Date().toISOString());
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('phone', formData.phone);
        form.append('address', formData.address);

        console.log("Form Data created:", Object.fromEntries(form));

        try {
            console.log("Sending fetch request...");
            await fetch(scriptURL, { method: 'POST', body: form, mode: 'no-cors' });
            console.log("Fetch request sent (no-cors mode)");

            // Since we use no-cors, we can't read the response, but if it doesn't throw, we assume success.
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", phone: "", address: "" });
            setTimeout(() => setOpen(false), 2000);
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus("Failed to send message.");
        } finally {
            setLoading(false);
            console.log("Form submission finished");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children || (
                    <Button size="lg" className="gap-2">
                        <Mail className="w-5 h-5" />
                        Send Message
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Send Message</DialogTitle>
                    <DialogDescription>
                        Fill out the form below to get in touch. I'll get back to you as soon as possible.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 234 567 8900"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Your Address"
                            required
                        />
                    </div>
                    <DialogFooter className="flex-col sm:justify-between sm:space-x-2">
                        {status && <p className="text-sm text-center text-muted-foreground w-full mb-2 sm:mb-0">{status}</p>}
                        <Button type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
