import { PrismaClient } from "@prisma/client";
import generator from "generate-password";

class CertificationService {
    private prisma = new PrismaClient();

    async createCode(email: string) {
        const code = generator.generate({ length: 8, numbers: true });

        const result = await this.prisma.certification.create({
            data: {
                email: email,
                code: code,
            },
        });

        console.log(code);
    }

    async deleteCode() {}

    async certifyCode() {}
}

const test = new CertificationService();

test.createCode("hihihihihi");
