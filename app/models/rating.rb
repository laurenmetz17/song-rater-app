class Rating < ApplicationRecord

    validates :comment, {presence:true}
    validates :review, {presence:true}
    
    belongs_to :song 
    belongs_to :listener 

    def listener_name
        return self.listener.name
    end
end
