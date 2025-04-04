export interface EndPoint {
    end_point_id: number;
    type: any;
    title: string;
    end_point: string;
    options: Object;
    count: number;
    active: boolean;
}

export interface UserEndPoint
{
    end_point_id: number;
    user_id: string;
    active: boolean;    
}