
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


export type SelectOptionProps = {
    label: string;
    value: string;
};
  
export type CategoryFormProps = {
    editingId?: string | undefined;
    initialData?: any | undefined | null;
    mainCategories: SelectOptionProps[];
};