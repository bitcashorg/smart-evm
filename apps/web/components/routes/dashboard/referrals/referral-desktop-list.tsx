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

export default function ReferralDesktopList({ referralList }: { referralList: Referral[] }) {
    return (
        <Accordion type="single" collapsible className="w-full hidden lg:block">
            {
                referralList.map(({ id, date, referralUser, contribution, myReward, contributionDate, project, accreditation, contributionToken }, index) => (
                    <AccordionItem key={id} className={cn(index === 0 ? "[&_svg]:self-start [&_svg]:mt-5" : "", "data-[state=open]:bg-accent-600 rounded-lg border-none px-[72px]")} value={id.toString()}>
                        <AccordionTrigger className="hover:no-underline">
                            <Table>
                                <TableHeader className={cn(index !== 0 ? "hidden" : "", "w-full")}>
                                    <TableRow>
                                        <TableHead className="text-base text-white opacity-80 font-medium whitespace-nowrap w-[25%]">Date</TableHead>
                                        <TableHead className="text-base text-white opacity-80 font-medium whitespace-nowrap w-[25%]">Referral User</TableHead>
                                        <TableHead className="text-base text-white opacity-80 font-medium whitespace-nowrap w-[25%]">Contribution</TableHead>
                                        <TableHead className="text-base text-white opacity-80 font-medium whitespace-nowrap w-[25%]">My Reward</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="text-left whitespace-nowrap w-[25%]">{date}</TableCell>
                                        <TableCell className="text-left whitespace-nowrap w-[25%]">{referralUser}</TableCell>
                                        <TableCell className="text-left whitespace-nowrap w-[25%]">{contribution}</TableCell>
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
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-base text-white opacity-80 font-medium whitespace-nowrap w-[25%]">Contribution date</TableHead>
                                        <TableHead className="text-base text-white opacity-80 font-medium whitespace-nowrap w-[25%]">Project</TableHead>
                                        <TableHead className="flex justify-start items-center gap-x-3 whitespace-nowrap w-[25%]">                            <p className="text-base text-white opacity-80 font-medium">Accreditation</p>
                                            <div className="h-1 w-1 rounded-full bg-[#4DF0C9]"></div></TableHead>
                                        <TableHead className="text-base text-white opacity-80 font-medium whitespace-nowrap w-[25%]">Contribution token</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="text-left whitespace-nowrap w-[25%]">{contributionDate}</TableCell>
                                        <TableCell className="text-left whitespace-nowrap w-[25%]">{project}</TableCell>
                                        <TableCell className="text-left whitespace-nowrap w-[25%]">{accreditation}</TableCell>
                                        <TableCell className="text-left whitespace-nowrap w-[25%]">{contributionToken}</TableCell>
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