import { UserRole } from "@prisma/client";

export type RegisterInputProps = {
    name: string;
    email: string;
    role: UserRole;
    image: string;
    password: string;
}

export type LoginProps = {
    email: string;
    password: string;
}

export type ContactProps = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

export type ContactSettingProps = {
    email: string;
    phone: string;
    location: string;
};

export type SettingProps = {
    phone?: string;
    email?: string;
    location?: string;
    cvUrl?: string;
    imageUrl?: string;
    linkedIn?: string;
    instagram?: string;
    facebook?: string;
    line?: string;
    github?: string;
    profileName?: string;
    animatedText?: string;
    googleMap?: string;
    profileDescription?: string;
    profileLineOne?: string;
    profileLineTwo?: string;
    profileLineThree?: string;
    monthOfExperience?: number;
    weekOfPractice?: number;
}

export type ProjectCategoryProps = {
    title: string;
    slug: string;
}

export type ProjectProps = {
    title: string;
    slug: string;
    imageUrl: string;
    tags: string;
    description: string;
    categoryId: string;
    github: string;
    hostedLink: string;
}

export type SkillProps = {
    title: string;
    slug: string;
    iconUrl: string;
    percent: number;
}

export type ToolProps = {
    title: string;
    slug: string;
    iconUrl: string;
    percent: number;
}

export type ServiceProps = {
    title: string;
    slug: string;
    iconUrl: string;
    description: string;
    slogan: string;
}

export type ExperienceProps = {
    period: string;
    title: string;
    company: string;
    description: string;
}

export type CourseProps = {
    period: string;
    title: string;
    school: string;
    description: string;
    certificate?: string;
}

export type EducationProps = {
    period: string;
    title: string;
    school: string;
    description: string;
    certificate?: string;
}

export type ReviewCardProps = {
    id: string;
    comment: string;
    rating: number;
    reviewerName: string;
    reviewerImage: string;
    reviewerTitle: string;
    videoLink: string;
    approved: boolean;
    projectId: string;
    createdAt: Date;
    updatedAt: Date;
};

export type BlogProps ={
    title: string;
    slug: string;
    imageUrl: string;
    tags: string;
    summary: string;
    content: string;
    categoryId: string;
}

export type BlogCategoryProps = {
    title: string;
    slug: string;
}

export type SelectOptionProps = {
    label: string;
    value: string;
};
  
export type CategoryFormProps = {
    editingId?: string | undefined;
    initialData?: any | undefined | null;
    mainCategories: SelectOptionProps[];
};