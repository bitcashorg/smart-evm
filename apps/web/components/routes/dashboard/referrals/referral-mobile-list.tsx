import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Referral {
    id: number;
    date: string;
    referralUser: string;
    contribution: number;
    myReward: number;
    contributionDate: string;
    project: string;
    accreditation: string;
    contributionToken: string;
}

export default function ReferralMobileList({ referralList }: { referralList: Referral[] }) {
    return (
        <Accordion type="single" collapsible className="w-full lg:hidden">
            {
                referralList.map(({ id, date, referralUser, contribution, myReward, contributionDate, project, accreditation, contributionToken }) => (
                    <AccordionItem key={id} className="data-[state=open]:bg-accent-600 rounded-lg border-none overflow-auto [&_svg]:self-start [&_svg]:mt-5" value={id.toString()}>
                        <AccordionTrigger className="hover:no-underline">
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="text-left text-base text-white opacity-80 font-medium whitespace-nowrap w-[50%]">Date</TableCell>
                                        <TableCell className="text-left whitespace-nowrap w-[50%]">{date}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-left text-base text-white opacity-80 font-medium whitespace-nowrap w-[50%]">Referral User</TableCell>
                                        <TableCell className="text-left whitespace-nowrap w-[50%]">{referralUser}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-left text-base text-white opacity-80 font-medium whitespace-nowrap w-[50%]">Contribution</TableCell>
                                        <TableCell className="text-left whitespace-nowrap w-[50%]">{contribution}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-left text-base text-white opacity-80 font-medium whitespace-nowrap w-[50%]">My Reward</TableCell>
                                        <TableCell className="flex justify-start items-center gap-x-2 w-[25%]">
                                            <p className="text-[#4DF0C9] text-base font-semibold whitespace-nowrap">{`+ $${myReward}`}</p>
                                            <picture>
                                                <source srcSet="/images/home/bl-coins.webp" type="image/webp" />
                                                <source srcSet="/images/home/bl-coins.png" type="image/png" />
                                                <Image
                                                    src="/images/home/bl-coins.webp"
                                                    alt="My reward"
                                                    loading="lazy"
                                                    width={26}
                                                    height={32}
                                                    className="min-w-7 min-h-8"
                                                />
                                            </picture>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </AccordionTrigger>
                        <AccordionContent>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="text-left text-base text-white opacity-80 font-medium whitespace-nowrap w-[50%]">Contribution date</TableCell>
                                        <TableCell className="text-left whitespace-nowrap w-[50%]">{contributionDate}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-left text-base text-white opacity-80 font-medium whitespace-nowrap w-[50%]">Project</TableCell>
                                        <TableCell className="text-left whitespace-nowrap w-[50%]">{project}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-left flex justify-start items-center gap-x-3 whitespace-nowrap w-[50%]">                            <p className="text-base text-white opacity-80 font-medium">Accreditation</p>
                                            <div className="h-1 w-1 rounded-full bg-[#4DF0C9]"></div></TableCell>
                                        <TableCell className="text-left whitespace-nowrap w-[50%]">{accreditation}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-left text-base text-white opacity-80 font-medium whitespace-nowrap w-[50%]">Contribution token</TableCell>
                                        <TableCell className="text-left whitespace-nowrap w-[50%]">{contributionToken}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}