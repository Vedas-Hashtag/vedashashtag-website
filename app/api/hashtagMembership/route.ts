import { sendEmail } from "@/app/utils/mail.utils";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  rollNo: z.string().min(2),
  email: z.string().email(),
  faculty: z.string().min(2),
  semester: z.string().min(2),
  reason: z.string().optional(),
  phone: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rollNo, email, faculty, semester, reason, phone } =
      formSchema.parse(body);

    const sender = { name, address: email };
    const recipient = [
      { name: "Vedas Hashtag", address: "vc78it03@vedascollege.edu.np" },
      { name, address: email },
    ];

    const subject = "Hashtag New Membership Form Submission";
    const emailContent = `
      <html>
        <body>
          <h2>New Hashtag Member Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Roll No:</strong> ${rollNo}</p>
          <p><strong>Faculty:</strong> ${faculty}</p>
          <p><strong>Semester:</strong> ${semester}</p>
          <p><strong>Contact Number:</strong> ${phone || "Not provided"}</p>
          <p><strong>Reason:</strong> ${reason || "Not provided"}</p>
        </body>
      </html>
    `;

    const result = await sendEmail({
      sender,
      recipient,
      subject,
      message: emailContent,
    });
    return new Response(JSON.stringify({ accepted: result.accepted }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response("Invalid input or unable to send email.", {
      status: 400,
    });
  }
}
